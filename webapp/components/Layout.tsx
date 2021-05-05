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
    return <header css={headerStyle}>{children}</header>
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

const headerStyle = css`
    height: 54px;
`

const mainStyle = css`
    height: 100%;
`
const bannerStyle = css`
    color: blue;
    height: 650px;
`
