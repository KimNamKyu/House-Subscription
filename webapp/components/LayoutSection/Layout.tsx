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
    display: flex;
    border-bottom: 1px solid rgb(231,231,231);
    background-color: transparent;
    height: 70px;
`

const mainStyle = css`
    display: flex;
    flex-flow: row nowrap;
    flex-direction: column;
    width: 1200px;
    height: 100%;
    margin: 0px auto;
    padding: px 10px;
    position: relative;
`
const bannerStyle = css`
    padding: 10px;
`
