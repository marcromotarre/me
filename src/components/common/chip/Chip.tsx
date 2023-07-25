import Typography from "../typography/Typography";
import Styles from "../../types/style";
import CloseIcon from "../icons/mr-icons/close";

const filledStyles = {
  backgroundColor: "#EBEBEB",
  color: "black",
};

const outlinedStyles: Styles = {
  border: "1px solid #B5B5B5",
  color: "black",
};

export default function Chip({
  label,
  variant = "filled",
  onDelete,
}: ComponentProps) {
  const _styles = variant === "filled" ? filledStyles : outlinedStyles;
  return (
    <div
      className="flex items-center justify-center rounded-full p-1 pl-2 pr-2"
      style={{ width: "fit-content", ..._styles }}
    >
      <Typography variant="caption">{label}</Typography>
      {onDelete && (
        <button className="ml-2 rounded-full bg-white p-1">
          <CloseIcon size={10} />
        </button>
      )}
    </div>
  );
}

type ComponentProps = {
  label: string;
  variant?: "filled" | "outlined";
  onDelete?: () => {};
};
