import Link from '@material-ui/core/Link/Link';
import React, { useState } from 'react';
import { Facebook, Twitter, WhatsApp, Email } from '@material-ui/icons';
import useTheme from '@material-ui/core/styles/useTheme';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import TextField from '@material-ui/core/TextField/TextField';
import Box from '@material-ui/core/Box/Box';
import Button from '@material-ui/core/Button/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function SocialMediaShareLinks() {
  const theme = useTheme();

  const [copied, setCopied] = useState(false);

  return (
    <React.Fragment>
      <Link
        href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location}
        target="_blank"
        rel="noreferrer"
        style={{ color: '#3b5998', marginRight: theme.spacing(2) }}>
        <Facebook fontSize="large" />
      </Link>
      <Link
        href={'whatsapp://send?text=' + window.location}
        target="_blank"
        rel="noreferrer"
        style={{ color: '#25D366', marginRight: theme.spacing(2) }}>
        <WhatsApp fontSize="large" />
      </Link>
      <Link
        href={'https://twitter.com/home?status=' + window.location}
        target="_blank"
        rel="noreferrer"
        style={{ color: '#1da1f2', marginRight: theme.spacing(2) }}>
        <Twitter fontSize="large" />
      </Link>
      <Link href={'mailto:?&subject=&body=' + window.location} target="_blank" rel="noreferrer" color="inherit">
        <Email fontSize="large" />
      </Link>
      <Box my={3}>
        <TextField
          id="campaign-link"
          name="campaignLink"
          value={window.location}
          variant={'outlined'}
          size={'small'}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <CopyToClipboard text={window.location} onCopy={() => setCopied(true)}>
                  <Button size="small" color="default" variant="contained">
                    {' '}
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                </CopyToClipboard>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </React.Fragment>
  );
}
