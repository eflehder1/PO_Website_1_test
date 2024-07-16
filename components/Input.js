export const Input = ({
  name,
  type,
  placeholder,
  label,
  validationRules,
  register,
  error,
  ...rest
}) => {
  const inputCss =
    'w-full bg-white text-[#4B4B4B] placeholder:text-[#4B4B4B] text-sm border border-[#E7E9ED] rounded-lg py-1 px-3 leading-8 transition-colors duration-200 ease-in-out';

  function renderInput() {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            className={`pt-2 resize-none h-32 ${inputCss}`}
            rows='5'
            type={type}
            placeholder={placeholder}
            {...register(name, validationRules)}
            {...rest}
          />
        );

      default:
        return (
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            className={`h-[56px] ${inputCss}`}
            onWheel={(e) => e.target.blur()}
            {...register(name, validationRules)}
            {...rest}
          />
        );
    }
  }

  return (
    <div className='w-full'>
      <label
        htmlFor={name}
        className='leading-7 text-sm text-[#29292B] font-semibold mb-[10px] inline-block'
      >
        {label}
      </label>
      {renderInput()}
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};
