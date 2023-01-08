import Head from 'next/head';
import { HeaderMenuSideNav } from '../../molecules/HeaderMenuSideNav';

export const Header = () => {
    return (
        <>
            <Head>
                <title>Pai Véio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderMenuSideNav />
        </>
    )
};