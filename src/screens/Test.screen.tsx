import * as React from "react";
import "../App.css";

import { useTranslation } from "react-i18next";

interface TestProps {}

export const TestScreen: React.FunctionComponent<TestProps> = () => {
  const { t } = useTranslation();
  React.useEffect(() => {}, []);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>{t("test")}</p>
        </header>
      </div>
    </>
  );
};
