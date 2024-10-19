import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Theme } from '@radix-ui/themes';
import './styles/globals.css';
import { HStack } from '@/styled-system/jsx';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 예시 코드입니다. (지우셔도 무방합니다.)
  fetch(`${process.env.NEXT_PUBLIC_MOCK_API_URL}/test`)
    .then((res) => res.json())
    .then((res) => console.log(res));
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Theme accentColor="gray" radius="large">
          <HStack alignItems="start">{children}</HStack>
        </Theme>
      </body>
    </html>
  );
}
