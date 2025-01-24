import { List } from '@/entities/list/ui/list';

const Page = () => {
	const ipsum = [
		'List item',
		'List item',
		'List item',
		'List item',
		'List item',
	];
	return <List items={ipsum} listName="List name" />;
};

export default Page;
