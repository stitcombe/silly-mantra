/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

// Terms of Use and Privacy Policy
import TermsOfUse from '../docs/terms_of_use.md';
import PrivacyPolicy from '../docs/privacy_policy.md';

export default function TermsPage(): JSX.Element {
  const [tosText, setTosText] = useState('');
  const [privacyPolicyText, setPrivacyPolicyText] = useState('');

  // Fetch Terms of Use
  useEffect(() => {
    fetch(TermsOfUse)
      .then((res) => res.text())
      .then((text) => setTosText(text));
  });

  useEffect(() => {
    fetch(PrivacyPolicy)
      .then((res) => res.text())
      .then((text) => setPrivacyPolicyText(text));
  });

  return (
    <>
      <ReactMarkdown
        components={ChakraUIRenderer()}
        children={tosText}
        skipHtml
      />
      <ReactMarkdown
        components={ChakraUIRenderer()}
        children={privacyPolicyText}
        skipHtml
      />
    </>
  );
}
