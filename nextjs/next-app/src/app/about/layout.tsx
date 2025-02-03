export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>
          <p> This is About layout</p>
          {children}
        </div>
      </body>
    </html>
  );
}
