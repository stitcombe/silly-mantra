import React from 'react';

/* Icons */
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

export type VariantType =
  | 'feedback'
  | 'bug'
  | 'idea'
  | 'appVers'
  | 'environemnt'
  | 'browser';

export function FeedbackTag({
  label,
  variantType,
}: {
  label: string;
  variantType: VariantType;
}): JSX.Element {
  const selectedVariant = variant[variantType];

  return (
    <Tag variant="subtle" colorScheme={selectedVariant.color}>
      <TagLeftIcon as={selectedVariant.icon} />
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
}
