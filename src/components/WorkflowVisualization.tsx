
import { useEffect, useRef } from 'react';

interface WorkflowVisualizationProps {
  workflow: Record<string, any>;
  height?: string;
  className?: string;
}

const WorkflowVisualization = ({ workflow, height = '400px', className = '' }: WorkflowVisualizationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Create the n8n-demo element
      const n8nDemo = document.createElement('n8n-demo');
      // Set the workflow as a JSON string
      n8nDemo.setAttribute('workflow', JSON.stringify(workflow));
      // Set any custom styles
      n8nDemo.style.width = '100%';
      n8nDemo.style.height = '100%';
      n8nDemo.style.borderRadius = 'var(--radius)';
      n8nDemo.className = 'n8n-demo';
      
      // Clear any existing content and append the new element
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(n8nDemo);
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [workflow]);

  return (
    <div 
      ref={containerRef} 
      className={`rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 ${className}`}
      style={{ height }}
    >
      {/* n8n-demo will be rendered here */}
    </div>
  );
};

export default WorkflowVisualization;
