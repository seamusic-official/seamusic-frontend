'use client';

import Link from 'next/link';
import s from './RegisterForm.module.scss';
import { AUTH_FORM_TITLE, PREFER_TEXT, TEXT_AUTH } from '@/constants/constants';
import { BtnBack, FormTitle, PreferItem } from '@/shared/ui';
import { useState } from 'react';

export function RegisterForm() {
  const [step, setStep] = useState(1);

  const setNextStep = () => setStep(2);
  const setPrevStep = () => setStep(1);

	return (
    <form className={s.form}>
      {step === 1 && (
        <>
          <FormTitle data={AUTH_FORM_TITLE.registerFormStep1Data} />
          <div className={s.registerBlock}>
            <div className={s.loginInput}>
              <div className={s.inputHeader}>{TEXT_AUTH.form_userName}</div>
              <input
                className={s.formInput}
                type="text"
              />
            </div>
            <div className={s.loginInput}>
              <div className={s.inputHeader}>{TEXT_AUTH.form_email}</div>
              <input
                className={s.formInput}
                type="text"
              />
            </div>
            <div className={s.loginInput}>
              <div className={s.inputHeader}>{TEXT_AUTH.form_password}</div>
              <input
                className={s.formInput}
                type="password"
              />
              <div className={s.inputFooter}>{TEXT_AUTH.form_passwordTips}</div>
            </div>
            <div className={s.loginInput}>
              <div className={s.inputHeader}>{TEXT_AUTH.form_passwordConfirm}</div>
              <input
                className={s.formInput}
                type="password"
              />
            </div>
          </div>
          <div className={s.nextStep}>
            <div className={s.nextBtn} onClick={setNextStep}>
              <div className={s.left}>{TEXT_AUTH.form_lastStep}</div>
              <svg width="15" height="28" viewBox="0 0 15 28"
                fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L13.9293 13.9293C13.9683 13.9683 13.9683 14.0317 13.9293 14.0707L1 27"
                  stroke="white" stroke-width="3" stroke-linecap="round"
                />
              </svg>
            </div>
            <div className={s.signUpLine}>
              <div>{TEXT_AUTH.form_login}</div>
              <Link href="/login" className={s.linkUnderline}>{TEXT_AUTH.form_signIn}</Link>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className={s.titleWrapper}>
            <div onClick={setPrevStep} className={s.btnWrapper}>
              <BtnBack />
            </div>
            <div className={s.logo}>{TEXT_AUTH.form_textLogo}</div>
          </div>
          <div className={s.roleWrapper}>
            <div className={s.roleTitle}>{TEXT_AUTH.form_roleTitle}</div>
            <div className={s.role}>
              <div className={`${s.roleItem} ${s.active}`}>Artist</div>
              <div className={s.roleItem}>Producer</div>
              <div className={s.roleItem}>Listener</div>
            </div>
          </div>
          <div className={s.preferWrapper}>
            <div className={s.preferTitle}>{TEXT_AUTH.form_preferTitle}</div>
            <div className={s.prefer}>
              {PREFER_TEXT.map((el, index) => (
                <PreferItem key={index} name={el} />
              ))}
            </div>
          </div>
          <div className={s.termsWrapper}>
            <input type="checkbox" className={s.termsCheckbox} />
            <div className={s.termTextWrapper}>
              {TEXT_AUTH.form_termsText}
              <Link href="/terms" className={s.termLink}>{TEXT_AUTH.form_terms}</Link>
              {TEXT_AUTH.form_termsAnd}
              <Link href="/priacy-policy" className={s.termLink}>{TEXT_AUTH.form_termsPrivacyPolicy}</Link>
            </div>
          </div>
          <Link href="/">
            <button className={s.btnAuth} role='presentation'>
              {TEXT_AUTH.form_signUp}
            </button>
          </Link>
          <div className={s.signUpLine}>
            <div>{TEXT_AUTH.form_login}</div>
            <Link href="/login" className={s.linkUnderline}>{TEXT_AUTH.form_signIn}</Link>
          </div>
        </>
      )}
    </form>
  )
}
