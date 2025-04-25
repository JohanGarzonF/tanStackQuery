import { LoadingSpinner } from '../../shared/components';
import { useLabels } from '../hooks';



export const LabelPicker = () => {

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
            className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn"
            style={{ border: `1px solid #${ label.color }`, color: `#${ label.color }` }}
          >
            { label.name }
          </span>
        ))
      }
    </div>
  );
};
