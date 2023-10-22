const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto grid max-w-screen-xl place-items-center min-h-[80dvh] pt-12">
      {children}
    </div>
  );
};
export default layout;
