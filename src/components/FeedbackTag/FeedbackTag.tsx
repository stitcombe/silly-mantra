import React from 'react';
import { Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
import { VscFeedback } from 'react-icons/vsc';
import { BiBugAlt, BiGitBranch, BiPackage } from 'react-icons/bi';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoMdBrowsers } from 'react-icons/io';

const variant = {
  feedback: {
    icon: VscFeedback,
    color: 'cyan',
  },
  bug: {
    icon: BiBugAlt,
    color: 'red',
  },
  idea: {
    icon: FaRegLightbulb,
    color: 'yellow',
  },
  appVers: {
    icon: BiGitBranch,
    color: 'blue',
  },
  environemnt: {
    icon: BiPackage,
    color: 'green',
  },
  browser: {
    icon: IoMdBrowsers,
    color: 'orange',
  },
};

export function FeedbackTag({
  label,
  variantType,
}: {
  label: string;
  variantType:
    | 'feedback'
    | 'bug'
    | 'idea'
    | 'appVers'
    | 'environemnt'
    | 'browser';
}): JSX.Element {
  const selectedVariant = variant[variantType];

  return (
    <Tag variant="subtle" colorScheme={selectedVariant.color}>
      <TagLeftIcon as={selectedVariant.icon} />
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
}
