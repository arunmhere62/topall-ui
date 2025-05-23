'use client';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
// import { useTranslations } from "next-intl";
interface EarningBlockProps {
  title?: string;
  className?: string;
  colors?: string[];
  series?: number[];
  labels?: string[];
  height?: number;
  chartType?: 'donut' | 'pie' | 'radialBar';
  total?: number | string;
  percentage?: string;
}

const EarningBlock = ({
  title = 'Earnings',
  total = '$0',
  percentage = '+08%',
  series = [70, 30],
  chartType = 'donut',
  height = 200,
  labels = ['Success', 'Return'],
  colors = ['#ffbf99', '#5cffff'],
  className = ''
}: EarningBlockProps) => {
  const { theme: mode } = useTheme();
  const options: any = {
    labels: labels,
    dataLabels: {
      enabled: false
    },
    tooltip: {
      theme: mode === 'dark' ? 'dark' : 'light'
    },
    colors: [...colors],
    legend: {
      position: 'bottom',
      fontSize: '12px',
      fontFamily: 'Outfit',
      fontWeight: 400,
      labels: {
        colors: mode === 'dark' ? '#cbd5e1' : '#0f172a'
      }
    },

    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: false,
              fontSize: '14px',
              fontWeight: 'bold',
              fontFamily: 'Inter'
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Outfit',
              color: mode === 'dark' ? '#cbd5e1' : '#0f172a',
              formatter(val: string) {
                return `${parseInt(val)}%`;
              }
            },
            total: {
              show: true,
              fontSize: '10px',
              label: '',
              formatter() {
                return '70';
              }
            }
          }
        }
      }
    }
  };
  // const t = useTranslations('EcommerceDashboard');
  return (
    <Card className={cn('', className)}>
      <CardContent className="px-4 py-3">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <div className="flex-1">
            <div className="mb-1.5 text-sm text-default-600">{title}</div>
            <div className="mb-1.5 text-lg font-medium text-default-900">{total}</div>
            <div className="whitespace-nowrap text-xs font-normal text-default-600">
              <span className="me-1 text-primary">{percentage}</span>
              {'statistics_graph_desc'}
            </div>
          </div>
          <div className="flex-none">
            <Chart
              options={options}
              series={series}
              type={chartType}
              height={height}
              width={'100%'}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningBlock;
