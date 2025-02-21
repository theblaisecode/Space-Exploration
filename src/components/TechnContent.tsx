import TechnContentWrapper from "../styles/TechnContentWrapper.tsx";

function TechnContent() {
  const [techData, setTechData] = useState<number>(1);

  const toggleTech = (index: number) => {
    setTechData(index);
  };

  return (
    <TechnContentWrapper>
      <div className="allTech"> TechnContent </div>
    </TechnContentWrapper>
  );
}
export default TechnContent;
