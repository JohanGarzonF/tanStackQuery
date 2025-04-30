import { LoadingSpinner } from '../../shared/components';
import { useLabels } from '../hooks';
import { FC } from 'react';

interface Props {
  selectedLabels: string[];
  onLabelSelected: ( label: string ) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onLabelSelected }) => {

  const { labelsQuery } = useLabels();

  if ( labelsQuery.isLoading || labelsQuery.isFetching ) {
    return (
      <LoadingSpinner />
    )
  }

  return (
    <div className='flex flex-wrap justify-center gap-2'>
      {
        labelsQuery.data?.map( label => (
          <span
            key={ label.id }
            onClick={ () => onLabelSelected( label.name ) }
            className={
              `px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn
              ${ selectedLabels.includes( label.name ) ? 'selected-label': '' }
              `
            }
            style={{ border: `1px solid #${ label.color }`, color: `#${ label.color }` }}
          >
            { label.name }
          </span>
        ))
      }
    </div>
  );
};
