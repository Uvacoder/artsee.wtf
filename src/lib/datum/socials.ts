import icon_twitter from './icons/twitter'
import icon_discord from './icons/discord'
import icon_opensea from './icons/opensea'
import icon_email from './icons/email'

import type { SocialLink } from '@/types'
import socialLinks from './socials.json'

const transform = {
	transform: {
		scale: 0.65,
		translate: {
			x: 10,
			y: 10,
		},
	},
}

export const twitter: SocialLink = {
	...socialLinks.twitter,
	...icon_twitter,
	...transform,
}

// TODO: show our opensea collection
// export const opensea: SocialLink = {
// 	...socialLinks.opensea,
// 	...icon_opensea,
// 	transform: {
// 		...transform.transform,
// 		scale: 0.5,
// 		translate: {
// 			x: 10.5,
// 			y: 9.5,
// 		},
// 	},
// }

export const discord: SocialLink = {
	...socialLinks.discord,
	...icon_discord,
	...transform,
}

export const email: SocialLink = {
	...socialLinks.email,
	...icon_email,
	transform: {
		...transform.transform,
		translate: {
			x: 7.5,
			y: 8,
		},
	},
}

export const ambition = socialLinks.ambition

export const chrome = socialLinks.chrome

export const socials: SocialLink[] = [
	//
	twitter,
	discord,
	// opensea,
]
