import { RecCardProps } from './types';

const VISIBLE_CTAS = {
	link: 'https://www.visible.com/get/?3RTJHTF',
	code: '3RTJHTF',
};

const SOFI_CTAS = {
	link: 'https://www.sofi.com/invite/money?gcp=1898e44c-6d04-4115-ac37-c62e6027460c&isAliasGcp=false',
};

const CATEGORIES = {
	banking: 'BANKING',
	phone: 'PHONE',
};

export const ALL_REFERRALS: { [key: string]: RecCardProps } = {
	VISIBLE: {
		headlineMarkup: (
			<p>
				I&apos;m currently using Visible by Verizon, use my code{' '}
				<a href={VISIBLE_CTAS.link} className='underline'>
					{VISIBLE_CTAS.code}
				</a>{' '}
				to get $20 off your bill!
			</p>
		),
		category: CATEGORIES.phone,
		cta: {
			link: VISIBLE_CTAS.link,
			code: VISIBLE_CTAS.code,
		},
		imageUrl: '/static/images/promo-cards/visible_promo.webp',
	},
	SOFI: {
		headlineMarkup: (
			<p>
				Sofi is where I do all my banking! Use my{' '}
				<a href={SOFI_CTAS.link} className='underline'>
					referral link
				</a>{' '}
				to get an extra for opening an account!
			</p>
		),
		category: CATEGORIES.banking,
		cta: {
			link: SOFI_CTAS.link,
		},
	},
};
