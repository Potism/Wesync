export const Separator = (props: { backgroundColor?: string }) => {
  return (
    <div
      style={{
        height: 8,
        backgroundColor: props.backgroundColor ?? '#dbdbdb',
      }}
      className="mx-auto w-1/5 rounded-full"
    />
  );
};
