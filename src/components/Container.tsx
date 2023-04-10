import React from 'react'

const Container = ({
  children,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  title?: string;
}) => {
  return (
    <div className="bg-gray-100 p-4 border shadow rounded-md">
      {title && <h2 className="text-xl pb-2 text-black">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Container;