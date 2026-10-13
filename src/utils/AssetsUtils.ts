import IMAGE_USER_DEFAULT from '@/assets/image/user.webp'
import IMAGE_USER_FEMALE from '@/assets/image/user-female.webp'
import IMAGE_USER_MALE from '@/assets/image/user-male.webp'
import IMAGE_IDCARD_BACK from '@/assets/image/color/back.webp'
import IMAGE_IDCARD_FONT from '@/assets/image/color/font.webp'

import FPR_IMAGE_BACK from '@/assets/image/FPR-1.webp'
import FPR_IMAGE_FONT from '@/assets/image/FPR-2.webp'

import JSON_CITY from '@/assets/json/city.json'
import JSON_COUNTRY from '@/assets/json/country.json'

// 头像池（AI 生成虚拟人脸，按性别分组；多人生成时自动分配不同头像）
const MALE_AVATAR_MODULES = import.meta.glob('../assets/image/avatar/male-*.webp', {
	eager: true,
	query: '?url',
	import: 'default'
}) as Record<string, string>
const FEMALE_AVATAR_MODULES = import.meta.glob('../assets/image/avatar/female-*.webp', {
	eager: true,
	query: '?url',
	import: 'default'
}) as Record<string, string>
export const AVATAR_MALE_LIST: string[] = Object.keys(MALE_AVATAR_MODULES)
	.sort()
	.map((k) => MALE_AVATAR_MODULES[k])
export const AVATAR_FEMALE_LIST: string[] = Object.keys(FEMALE_AVATAR_MODULES)
	.sort()
	.map((k) => FEMALE_AVATAR_MODULES[k])

export {
	IMAGE_USER_DEFAULT,
	IMAGE_USER_FEMALE,
	IMAGE_USER_MALE,
	IMAGE_IDCARD_BACK,
	IMAGE_IDCARD_FONT,
	FPR_IMAGE_BACK,
	FPR_IMAGE_FONT,
	JSON_CITY,
	JSON_COUNTRY
}
