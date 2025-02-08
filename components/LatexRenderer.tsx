'use client'

import React, { useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LatexRendererProps {
    latex: string;
    id: string;
}

export const LatexRenderer: React.FC<LatexRendererProps> = ({ latex, id }) => {
    useEffect(() => {
        // Render the LaTeX content after the component has mounted
        const element = document.getElementById(id);
        if (element) {
          katex.render(latex, element, {
            throwOnError: false,
          });
        }
      }, [latex]);
    return <span id={id} className="mx-2"></span>;
}