import './globals.css';

export const metadata = {
  title: 'FloodHelp',
  description: 'Help people with their dreams',
  charSet: 'utf-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>{children}</body>
    </html>
  );
}
