import { buildLegacyTheme } from "sanity";

const props = {
	"--whitish": "#fff",
	"--blackish": "#1a1a1a",
	"--reddish": "#db4437",
	"--yellowish": "#f4b400",
	"--greenish": "#0f9d58",
	"--orangish": "#f7ab0a",
};

export const myTheme = buildLegacyTheme({
	// Base colors
	"--black": props["--blackish"],
	"--white": props["--whitish"],
	"--gray": "#666",
	"--gray-base": "#666",
	"--component-bg": props["--blackish"],
	"--component-text-color": props["--orangish"],
	"--brand-primary": props["--orangish"],
	"--default-button-color": "#666",
	"--default-button-primary-color": props["--orangish"],
	"--default-button-success-color": props["--greenish"],
	"--default-button-warning-color": props["--yellowish"],
	"--default-button-danger-color": props["--reddish"],

	"--state-info-color": props["--orangish"],
	"--state-success-color": props["--greenish"],
	"--state-warning-color": props["--yellowish"],
	"--state-danger-color": props["--reddish"],

	"--main-navigation-color": props["--blackish"],
	"--main-navigation-color--inverted": props["--whitish"],

	"--focus-color": props["--orangish"],
});
