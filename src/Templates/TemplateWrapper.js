import TemplateDocs from "./TemplateDocs";
import TemplateAuth from "./TemplateAuth";

export default function TemplateWrapper({ layout, ...props }) {
  switch (layout) {
    case "docs":
      return <TemplateDocs>{props.children}</TemplateDocs>;
    default:
      return <TemplateAuth>{props.children}</TemplateAuth>;
  }
}
