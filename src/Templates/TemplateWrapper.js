import TemplateDocs from "./TemplateDocs";
import TemplateAuth from "./TemplateAuth";
import TemplateCampaign from "./TemplateCampaign";

export default function TemplateWrapper({ layout, ...props }) {
  switch (layout) {
    case "docs":
      return <TemplateDocs>{props.children}</TemplateDocs>;
    case "campaign":
      return <TemplateCampaign>{props.children}</TemplateCampaign>;
    default:
      return <TemplateAuth>{props.children}</TemplateAuth>;
  }
}
