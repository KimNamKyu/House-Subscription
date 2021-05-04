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

export type MainProps = {
    children: React.ReactNode;
}
function Main({ children }: MainProps) {
    return <main css={mainStyle}>{children}</main>
}

Layout.Header = Header;
Layout.Main = Main;

const mainStyle = css`
    
`