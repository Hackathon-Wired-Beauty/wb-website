import * as React from "react";

import { useTranslation } from "react-i18next";

interface TemplateProps {}

export const TemplateScreen: React.FunctionComponent<TemplateProps> = () => {
  const { t } = useTranslation();
  React.useEffect(() => {}, []);
  return (
    <>
      <p>{t("title")}</p>
    </>
  );
};
