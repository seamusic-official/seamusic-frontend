'use client';

import Link from 'next/link';
import s from './RegisterForm.module.scss';
import { useState } from 'react';
import { FormTitle, PreferItem } from '@/shared/ui';
import { ArrowBtn } from '@/shared/ui/buttons';

const PREFER_TEXT = [
	'Deep house',
	'Trap',
	'Minimal',
	'Indie rock',
	'Metal',
	'Mitol',
	'Funk',
	'Electronica',
	'Rock',
	'Chill-wave',
	'NU Disco',
	'NE Disco',
	'Acoustic',
	'Folk',
	'Lo-fi',
	'Indie-pop',
	'Indee-pop',
];

export const RegisterForm = () => {
	const [step, setStep] = useState(1);

	const setNextStep = () => setStep(2);
	const setPrevStep = () => setStep(1);

	return (
		<form className={s.form}>
			{step === 1 && (
				<>
					<FormTitle data={{ left: 'Sign up', right: 'SeaMusic' }} />
					<div className={s.registerBlock}>
						<div className={s.loginInput}>
							<div className={s.inputHeader}>{'User Name'}</div>
							<input className={s.formInput} type="text" />
						</div>
						<div className={s.loginInput}>
							<div className={s.inputHeader}>{'Email adress'}</div>
							<input className={s.formInput} type="text" />
						</div>
						<div className={s.loginInput}>
							<div className={s.inputHeader}>{'Password'}</div>
							<input className={s.formInput} type="password" />
							<div className={s.inputFooter}>
								{
									'Use 8 or more characters with a mix of letters, numbers & symbols'
								}
							</div>
						</div>
						<div className={s.loginInput}>
							<div className={s.inputHeader}>{'Confirm your password'}</div>
							<input className={s.formInput} type="password" />
						</div>
					</div>
					<div className={s.nextStep}>
						<div className={s.nextBtn} onClick={setNextStep}>
							<div className={s.left}>{'Last Step'}</div>
							<svg
								width="15"
								height="28"
								viewBox="0 0 15 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1 1L13.9293 13.9293C13.9683 13.9683 13.9683 14.0317 13.9293 14.0707L1 27"
									stroke="white"
									strokeWidth="3"
									strokeLinecap="round"
								/>
							</svg>
						</div>
						<div className={s.signUpLine}>
							<div>{'Already have an account? '}</div>
							<Link href="/login" className={s.linkUnderline}>
								{'Sign in'}
							</Link>
						</div>
					</div>
				</>
			)}
			{step === 2 && (
				<>
					<div className={s.titleWrapper}>
						<div onClick={setPrevStep} className={s.btnWrapper}>
							<ArrowBtn variant="primary" />
						</div>
						<div className={s.logo}>{'SeaMusic'}</div>
					</div>
					<div className={s.roleWrapper}>
						<div className={s.roleTitle}>{'Who are you?'}</div>
						<div className={s.role}>
							<div className={`${s.roleItem} ${s.active}`}>Artist</div>
							<div className={s.roleItem}>Producer</div>
							<div className={s.roleItem}>Listener</div>
						</div>
					</div>
					<div className={s.preferWrapper}>
						<div className={s.preferTitle}>
							{'What do you prefer in music?'}
						</div>
						<div className={s.prefer}>
							{PREFER_TEXT.map((el, index) => (
								<PreferItem key={index} name={el} />
							))}
						</div>
					</div>
					<div className={s.termsWrapper}>
						<input type="checkbox" className={s.termsCheckbox} />
						<div className={s.termTextWrapper}>
							{'By creating an account, I agree to our '}
							<Link href="/terms" className={s.termLink}>
								{'Terms of use '}
							</Link>
							{'and '}
							<Link href="/priacy-policy" className={s.termLink}>
								{'Privacy Policy '}
							</Link>
						</div>
					</div>
					<Link href="/">
						<button className={s.btnAuth} role="presentation">
							{'Sign up'}
						</button>
					</Link>
					<div className={s.signUpLine}>
						<div>{'Already have an account? '}</div>
						<Link href="/login" className={s.linkUnderline}>
							{'Sign in'}
						</Link>
					</div>
				</>
			)}
		</form>
	);
};
