const InputField = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  icon: IconComponent,
  selectOptions,
  label,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-gray-700  font-semibold mb-2 mt-2">
          {label}
        </label>
      )}
      {type === 'select' ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4caec] transition duration-300 ease-in-out"
          {...props}
        >
          {selectOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4caec] transition duration-300 ease-in-out w-full"
            {...props}
          />
          {IconComponent && (
            <IconComponent className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={20} />
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
