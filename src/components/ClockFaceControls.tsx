type FaceStyle = "numbers" | "dashes" | "none";

type Props = {
  faceStyle: FaceStyle;
  onFaceStyleChange: (faceStyle: FaceStyle) => void;
};

export default function ClockFaceControls({
  faceStyle,
  onFaceStyleChange,
}: Props) {
  return (
    <div className="mt-10 flex gap-4 border flex-col">
      <label htmlFor="faceStyle">Clock Face Style:</label>
      <select
        id="faceStyle"
        value={faceStyle}
        onChange={(e) => onFaceStyleChange(e.target.value as FaceStyle)}
      >
        <option value="numbers">Numbers</option>
        <option value="dashes">Dashes</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
