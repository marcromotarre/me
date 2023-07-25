import Chip from "../../../../components/common/chip/Chip";

export default function ReactMyComponentsChipPage() {
  return (
    <>
      <div>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </div>

      <div>
        <Chip label="Deletable" onDelete={() => {}} />
        <Chip label="Deletable" variant="outlined" onDelete={() => {}} />
      </div>
    </>
  );
}
