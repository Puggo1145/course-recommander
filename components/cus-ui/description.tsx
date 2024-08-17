const Description: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <p className="text-gray-500 mt-2">
        {children}
    </p>
  );
};

export default Description;