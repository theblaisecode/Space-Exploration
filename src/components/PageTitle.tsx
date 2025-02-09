type PageHeading = {
  highlight: string;
  text: string;
};

function PageTitle(props: PageHeading) {
  return (
    <h3 className="pageTitle">
      <span>{props.highlight}</span> {props.text}
      {/* <span>01</span> pick your destination */}
    </h3>
  );
}

export default PageTitle;
