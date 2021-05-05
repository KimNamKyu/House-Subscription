import { css } from "@emotion/react";

interface LayoutProps {
    children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return <div>{children}</div>
}

interface HeadProps {
    children: React.ReactNode;
}
function Header({ children }: HeadProps) {
    return <header>{children}</header>
}

interface MainProps {
    children: React.ReactNode;
}
function Main({ children }: MainProps) {
    return <main css={mainStyle}>{children}</main>
}

interface BannerProps {
    children: React.ReactNode;
}
function Banner({ children }: BannerProps) {
    return <div css={bannerStyle}>{children}</div>
}

Layout.Header = Header;
Layout.Banner = Banner;
Layout.Main = Main;

const mainStyle = css`
    background-color: black;
`
const bannerStyle = css`
    color: blue;
`
