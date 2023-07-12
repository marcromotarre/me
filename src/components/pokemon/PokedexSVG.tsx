const PokedexSVG = ({
  color = "black",
  strokeColor = "transparent",
  strokeWidth = "0.2",
  size = 20,
  className = "",
}: {
  color?: string;
  strokeColor?: string;
  strokeWidth?: string;
  size?: number;
  className?: string;
}) => {
  const ASPECT_RATIO = 663 / 489;

  return (
    <svg
      width={`${size}px`}
      height={`${size * ASPECT_RATIO}px`}
      viewBox="0 0 663 489"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 1.5H317C327.217 1.5 335.5 9.78273 335.5 20V487.5H20C9.78272 487.5 1.5 479.217 1.5 469V20C1.5 9.78274 9.78273 1.5 20 1.5Z"
        fill="#FE0065"
        stroke="black"
        strokeWidth="3"
      />
      <path d="M2 107H101.5L153.5 55H334.5" stroke="black" strokeWidth="3" />
      <path
        d="M68.5 117.5H267.5V319.5H107C85.737 319.5 68.5 302.263 68.5 281V117.5Z"
        fill="white"
        stroke="black"
        strokeWidth="3"
      />
      <mask id="path-4-inside-1_157_433" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M265 348C261.686 348 259 350.686 259 354V373L240 373C236.686 373 234 375.686 234 379V395C234 398.314 236.686 401 240 401H259V420C259 423.314 261.686 426 265 426H281C284.314 426 287 423.314 287 420V401H306C309.314 401 312 398.314 312 395V379C312 375.686 309.314 373 306 373L287 373V354C287 350.686 284.314 348 281 348H265Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M265 348C261.686 348 259 350.686 259 354V373L240 373C236.686 373 234 375.686 234 379V395C234 398.314 236.686 401 240 401H259V420C259 423.314 261.686 426 265 426H281C284.314 426 287 423.314 287 420V401H306C309.314 401 312 398.314 312 395V379C312 375.686 309.314 373 306 373L287 373V354C287 350.686 284.314 348 281 348H265Z"
        fill="#585858"
      />
      <path
        d="M259 373L259 376L262 376V373H259ZM240 373L240 370H240V373ZM259 401H262V398H259V401ZM287 401V398H284V401H287ZM306 373L306 376H306V373ZM287 373H284V376L287 376L287 373ZM262 354C262 352.343 263.343 351 265 351V345C260.029 345 256 349.029 256 354H262ZM262 373V354H256V373H262ZM240 376L259 376L259 370L240 370L240 376ZM237 379C237 377.343 238.343 376 240 376V370C235.029 370 231 374.029 231 379H237ZM237 395V379H231V395H237ZM240 398C238.343 398 237 396.657 237 395H231C231 399.971 235.029 404 240 404V398ZM259 398H240V404H259V398ZM262 420V401H256V420H262ZM265 423C263.343 423 262 421.657 262 420H256C256 424.971 260.029 429 265 429V423ZM281 423H265V429H281V423ZM284 420C284 421.657 282.657 423 281 423V429C285.971 429 290 424.971 290 420H284ZM284 401V420H290V401H284ZM306 398H287V404H306V398ZM309 395C309 396.657 307.657 398 306 398V404C310.971 404 315 399.971 315 395H309ZM309 379V395H315V379H309ZM306 376C307.657 376 309 377.343 309 379H315C315 374.029 310.971 370 306 370V376ZM287 376L306 376L306 370L287 370L287 376ZM284 354V373H290V354H284ZM281 351C282.657 351 284 352.343 284 354H290C290 349.029 285.971 345 281 345V351ZM265 351H281V345H265V351Z"
        fill="black"
        mask="url(#path-4-inside-1_157_433)"
      />
      <path
        d="M511 56H335V487.5H661V107.5H562.5L511 56Z"
        fill="#FE0065"
        stroke="black"
        strokeWidth="3"
      />
      <rect
        x="84"
        y="134"
        width="167"
        height="160"
        rx="9"
        fill="#98CB98"
        stroke="black"
        strokeWidth="2"
      />
      <rect
        x="357"
        y="138"
        width="282"
        height="321"
        rx="13"
        fill="#585858"
        stroke="black"
        strokeWidth="2"
      />
      <rect
        x="25"
        y="428"
        width="215"
        height="42"
        rx="7"
        fill="#3AB47D"
        stroke="black"
        strokeWidth="2"
      />
      <circle cx="56" cy="49" r="42.5" fill="white" stroke="black" />
      <circle cx="56" cy="49" r="38.5" fill="#3298CB" stroke="black" />
      <circle cx="41" cy="38" r="11" fill="#85BDFE" />
      <circle cx="56" cy="49" r="38.5" fill="#3298CB" stroke="black" />
      <circle opacity="0.3" cx="41" cy="38" r="11" fill="white" />
      <circle
        cx="168"
        cy="27"
        r="11"
        fill="#FF0102"
        stroke="black"
        strokeWidth="2"
      />
      <circle opacity="0.3" cx="163.5" cy="23.5" r="3.5" fill="white" />
      <circle
        cx="198"
        cy="27"
        r="11"
        fill="#FECB65"
        stroke="black"
        strokeWidth="2"
      />
      <circle opacity="0.3" cx="193.5" cy="23.5" r="3.5" fill="white" />
      <circle
        cx="228"
        cy="27"
        r="11"
        fill="#32CA64"
        stroke="black"
        strokeWidth="2"
      />
      <circle opacity="0.3" cx="223.5" cy="23.5" r="3.5" fill="white" />
      <circle
        cx="106"
        cy="307"
        r="6"
        fill="#FF0102"
        stroke="black"
        strokeWidth="2"
      />
      <circle opacity="0.3" cx="104" cy="306" r="2" fill="white" />
      <rect x="208" y="298" width="26" height="3" fill="#030303" />
      <rect x="208" y="303" width="26" height="3" fill="#030303" />
      <rect x="208" y="308" width="26" height="3" fill="#030303" />
    </svg>
  );
};

export default PokedexSVG;
