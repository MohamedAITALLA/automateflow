
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  ArrowDown, 
  Clock, 
  Download, 
  Filter, 
  Search, 
  Settings, 
  SlidersHorizontal, 
  Star, 
  SortAsc 
} from 'lucide-react';
import Layout from '@/components/Layout';
import WorkflowVisualization from '@/components/WorkflowVisualization';
import { templates, templateCategories, templateWorkflows } from '@/data/templates';
import { useIsMobile } from '@/hooks/use-mobile';

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'popular' | 'newest'>('popular');
  const isMobile = useIsMobile();

  // Filter templates based on selected category and search query
  const filteredTemplates = templates
    .filter(template => 
      (selectedCategory === 'All' || template.category === selectedCategory) &&
      (template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       template.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => sortBy === 'popular' ? b.downloads - a.downloads : b.rating - a.rating);

  // Find the currently selected template
  const currentTemplate = selectedTemplate 
    ? templates.find(t => t.id === selectedTemplate) 
    : null;

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Free Automation Templates</h1>
            <p className="text-base md:text-xl text-blue-100 mb-6">
              Browse and download our ready-to-use n8n workflow templates to kickstart your automation journey.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                className="pl-10 pr-4 py-3 w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Section - Responsive */}
      <section className="py-4 md:py-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-20 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            {/* Category Filter - Scrollable on mobile */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Filter by Category
                  </h3>
                </div>
                
                {/* Sorting Control - Mobile aligned to right */}
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size={isMobile ? "xs" : "sm"} className="flex items-center gap-1 border-gray-300 dark:border-gray-700">
                        <SortAsc className="h-3 w-3 md:h-3.5 md:w-3.5" />
                        <span className="font-medium text-xs md:text-sm">
                          {sortBy === 'popular' ? 'Popular' : 'Highest Rated'}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 md:w-48 bg-white dark:bg-gray-950 shadow-lg border border-gray-200 dark:border-gray-800">
                      <DropdownMenuItem 
                        onClick={() => setSortBy('popular')}
                        className={`${sortBy === 'popular' ? 'bg-blue-50 dark:bg-blue-900/20 text-primary' : ''}`}
                      >
                        <Download className="h-3.5 w-3.5 mr-2" />
                        Most Popular
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => setSortBy('newest')}
                        className={`${sortBy === 'newest' ? 'bg-blue-50 dark:bg-blue-900/20 text-primary' : ''}`}
                      >
                        <Star className="h-3.5 w-3.5 mr-2" />
                        Highest Rated
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              {/* Horizontal scrollable category filters on mobile */}
              <div className="overflow-x-auto pb-2 -mx-4 px-4">
                <div className="flex flex-nowrap gap-2 min-w-max">
                  <ToggleGroup type="single" value={selectedCategory} onValueChange={(value) => value && setSelectedCategory(value)}>
                    {templateCategories.map(category => (
                      <ToggleGroupItem 
                        key={category} 
                        value={category}
                        className="px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap data-[state=on]:bg-primary data-[state=on]:text-white"
                      >
                        {category}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">{filteredTemplates.length}</span>
                  <span className="ml-1">{filteredTemplates.length === 1 ? 'template' : 'templates'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section - Responsive Grid */}
      <section className="py-8 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-8 md:py-12 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <Search className="h-8 w-8 md:h-10 md:w-10 mx-auto text-gray-400 mb-3" />
              <h3 className="text-lg md:text-xl font-medium mb-2">No templates found</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                We couldn't find any templates matching your search or filter criteria. 
                Try adjusting your filters or search for something different.
              </p>
              <Button 
                variant="outline" 
                size={isMobile ? "sm" : "default"}
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {filteredTemplates.map(template => (
                <div 
                  key={template.id} 
                  className={`bg-white dark:bg-gray-900 border ${
                    selectedTemplate === template.id 
                      ? 'border-primary' 
                      : 'border-gray-200 dark:border-gray-700'
                  } rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all`}
                >
                  <div className="p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded text-xs">
                        {template.category}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{template.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-semibold mb-2">{template.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {template.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.integrations.slice(0, isMobile ? 2 : 4).map((integration, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                        >
                          {integration}
                        </span>
                      ))}
                      {template.integrations.length > (isMobile ? 2 : 4) && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{template.integrations.length - (isMobile ? 2 : 4)} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        <span>Saves {template.timeSaving}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        <span>{template.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs mr-2">
                        {template.difficulty}
                      </div>
                      <Button
                        variant={selectedTemplate === template.id ? "default" : "outline"}
                        size={isMobile ? "xs" : "sm"}
                        className="ml-auto"
                        onClick={() => setSelectedTemplate(
                          selectedTemplate === template.id ? null : template.id
                        )}
                      >
                        {selectedTemplate === template.id ? 'Hide Details' : 'View Details'}
                      </Button>
                    </div>
                  </div>
                  
                  {selectedTemplate === template.id && (
                    <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                      <h4 className="font-medium mb-3 text-sm md:text-base">Workflow Preview</h4>
                      <WorkflowVisualization 
                        workflow={templateWorkflows[template.workflowId]} 
                        height={isMobile ? "200px" : "300px"}
                        className="mb-4"
                      />
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-3 md:space-y-0">
                        <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                          Compatible with n8n version 1.89.0+
                        </div>
                        <Button size={isMobile ? "sm" : "default"}>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How to Use Section - Responsive */}
      <section className="py-8 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">How to Use Our Templates</h2>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get up and running with our n8n workflow templates in minutes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="h-12 w-12 md:h-16 md:w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Download className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">1. Download Template</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Browse our library and download the JSON file for your desired automation workflow.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-12 w-12 md:h-16 md:w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">2. Import to n8n</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  In your n8n instance, create a new workflow and import the downloaded JSON file.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-12 w-12 md:h-16 md:w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Settings className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">3. Configure & Activate</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Set up your credentials, customize the workflow for your needs, and activate it.
                </p>
              </div>
            </div>
            
            <div className="mt-8 md:mt-12 text-center">
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
                Need help implementing or customizing these templates for your business?
              </p>
              <Button asChild size={isMobile ? "default" : "lg"}>
                <Link to="/contact">Get Implementation Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-10 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between text-center md:text-left md:flex-row">
            <div className="mb-6 md:mb-0 md:pr-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Need a Custom Solution?</h2>
              <p className="text-blue-100 text-base md:text-xl max-w-2xl">
                Our templates are just the beginning. Let us build a tailored automation solution for your specific business needs.
              </p>
            </div>
            <Button asChild size={isMobile ? "default" : "lg"} className="bg-white text-primary hover:bg-blue-50 whitespace-nowrap">
              <Link to="/contact">Request Custom Workflow</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Templates;
