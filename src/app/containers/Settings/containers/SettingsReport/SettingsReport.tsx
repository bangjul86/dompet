import React from 'react';

import { Button, Window } from '@app/shared/components';
import { styled } from '@linaria/react';
import { SaveIcon } from '@app/shared/icons';
import * as extensionizer from 'extensionizer';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import { ROUTES } from '@app/shared/constants';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogs } from '@app/containers/Settings/store/selectors';

const ReportStyled = styled.div`
  margin-bottom: 30px;

  p {
    margin: 0;
    text-align: start;
    font-size: 16px;
    line-height: 1.25;
  }
`;

const LinkStyled = styled.span`
  cursor: pointer;
  color: #00f6d2;
  margin 0 3px;
`;

const SettingsReport = () => {
  const navigate = useNavigate();
  const logs: any = useSelector(selectLogs());

  const handlePrevious: React.MouseEventHandler = () => {
    navigate(ROUTES.SETTINGS.BASE);
  };

  const mailClicked = () => {
    const mailText = 'mailto:support@beam.mw';
    window.location.href = mailText;
  };

  const githubClicked = () => {
    window.open('https://github.com/BeamMW/web-wallet/issues', '_blank');
  };

  const saveLogsclicked = () => {
    const { version } = extensionizer.runtime.getManifest();
    const zip = new JSZip();
    const finalLogs = logs.common.concat(logs.errors).concat(logs.warns);

    zip.file('logs.log', finalLogs.join('\n'));
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, `beam-web-wallet-${version}-report.zip`);
    });

    navigate(ROUTES.SETTINGS.BASE);
  };

  return (
    <Window title="Report a problem" onPrevious={handlePrevious}>
      <ReportStyled>
        <p>To report a problem:</p>
        <p>1. Click “Save wallet logs” and choose</p>
        <p>a destination folder for log archive.</p>
        <p>
          2. Send email to
          <LinkStyled onClick={() => mailClicked()}>support@beam.mw</LinkStyled>
          or open a ticket in
          <LinkStyled onClick={() => githubClicked()}>Github</LinkStyled>.
        </p>
        <p>3. Don’t forget to attach logs archive.</p>
      </ReportStyled>
      <Button type="button" icon={SaveIcon} onClick={() => saveLogsclicked()}>
        save wallet logs
      </Button>
    </Window>
  );
};

export default SettingsReport;
