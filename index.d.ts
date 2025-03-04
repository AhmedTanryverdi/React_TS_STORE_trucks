declare module "*.module.scss" {
	const content: Record<string, string>;
	export default content;
}

declare module "*.svg" {
	const content: DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>;
	export default content;
}

declare module "*.png" {
	const content: DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>;
	export default content;
}
