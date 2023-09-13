
export const RedRect = ({ ...props }) => {
  return (
    <div
      className="bg-orange rounded-tl-[20px] rounded-br-[20px] w-[196px] h-[43px] relative"
      style={{ boxShadow: "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
        {props.text}
    </div>
  );
};

