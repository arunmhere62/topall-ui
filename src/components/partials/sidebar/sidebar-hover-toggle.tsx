'use client';
import React from 'react';
import { useMenuHoverConfig } from '@/hooks/use-menu-hover';
import { cn } from '@/lib/utils';
import { useConfig } from '@/hooks/use-config';
import { useMediaQuery } from '@/hooks/use-media-query';

const SidebarHoverToggle = () => {
  const [hoverConfig, setHoverConfig] = useMenuHoverConfig();
  const [config, setConfig] = useConfig();

  const isDesktop = useMediaQuery('(min-width: 1280px)');
  if (config.sidebar !== 'classic' || !isDesktop) {
    return null;
  }

  return !config.collapsed || hoverConfig.hovered ? (
    <div
      onClick={() => setConfig({ ...config, collapsed: !config.collapsed })}
      className={cn(
        'h-4 w-4 rounded-full border-[1.5px] border-default-900 transition-all duration-150 dark:border-default-700',
        {
          'ring-black-900 bg-default-900 ring-2 ring-inset ring-offset-4 dark:bg-default-400 dark:ring-default-400 dark:ring-offset-default-700':
            !config.collapsed
        }
      )}
    ></div>
  ) : null;
};

export default SidebarHoverToggle;
