import { PokedexIcon } from "../../../components/common/icons";
import Typography from "../../../components/common/typography/Typography";

export default function ReactRecoilPage() {
  return (
    <>
      <div className="relative">
        <Typography
          style={{
            position: "absolute",
            top: "28px",
            left: "14px",
            textAlign: "center",
            color: "white",
            fontWeight: "900",
          }}
        >
          99
        </Typography>
        <PokedexIcon></PokedexIcon>
      </div>
    </>
  );
}
