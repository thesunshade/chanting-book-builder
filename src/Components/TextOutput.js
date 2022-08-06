import { library } from "../data/library.js";

export default function TextOutput(props) {
  const textName = props.textName;

  const textBody = library[textName].content;
  const textTitle = library[textName].title;
  return (
    <>
      <h1>
        <span className="eng-title">{textTitle["eng-eng"]}</span>
      </h1>
      <div id={textName}>
        {textBody.map(line => {
          return (
            <>
              <div className="line">
                <p className="sin-sin">{line["sin-sin"]}</p>
                <p className="sin-eng">{line["sin-eng"]}</p>
                <p className="eng-eng">{line["eng-eng"]}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
