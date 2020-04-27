import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import { BaseLayout } from '../../components/BaseLayout';
import { SelectedPropertyData } from './SelectedPropertyData';
import { getProperties } from '../../Api';
import { BoxWrapper, SelectWrapper } from './styled';

const areaTypeOptions = [
  { value: { min: 0, max: 500 }, label: '0-500' },
  { value: { min: 501, max: 1000 }, label: '501-1000' },
  { value: { min: 1001, max: 2000 }, label: '1001-2000' },
  { value: { min: 2001, max: 5000 }, label: '2001-5000' },
];

const makeArrayUnique = (array: string[]) => {
  return Array.from(new Set(array));
};

export const Properties: React.FC = () => {
  const [properties, setProperties] = useState<any[] | []>([]);
  const [selectedArea, setSelectedArea] = useState<any[] | null>(null);
  const [selectedPremiseType, setSelectedPremiseType] = useState<any[] | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<any[] | null>(null);
  const [premisesTypesOptions, setPremisesTypesOptions] = useState<any[]>([]);
  const [avalPropertiesOptions, setAvalPropertiesOptions] = useState<any[]>([]);

  useEffect(() => {
    getProperties().then((data) => {
      setProperties(data);
    });
  }, []);

  const handleSelectArea = (selected: any) => {
    setSelectedArea(selected);
    setSelectedPremiseType(null);
    setSelectedProperty(null);
    const premisesTypes: any[] = [];
    properties.forEach((property) => {
      property.premisesTypes.forEach((premiseType: any) => {
        if (premiseType.area > selected.value.min && premiseType.area < selected.value.max) {
          premisesTypes.push(premiseType.type);
        }
      });
    });
    const premisesTypesOptionsArray = makeArrayUnique(premisesTypes).map((value) => {
      return {
        value,
        label: value,
      };
    });
    setPremisesTypesOptions(premisesTypesOptionsArray);
  };

  const handleSelectPremisesType = (selected: any) => {
    setSelectedProperty(null);
    const avalPropertiesOption: any[] = [];
    properties.forEach((property) => {
      property.premisesTypes.forEach((premiseType: any) => {
        // @ts-ignore
        if (premiseType.area > selectedArea.value.min && premiseType.area < selectedArea.value.max) {
          if (premiseType.type === selected.value) {
            avalPropertiesOption.push({
              value: property,
              label: property.name,
            });
          }
        }
      });
    });
    setAvalPropertiesOptions(avalPropertiesOption);
    setSelectedPremiseType(selected);
  };

  const handleSelectProperties = (selected: any) => {
    setSelectedProperty(selected);
  };

  return (
    <BaseLayout>
      <h1>Properties</h1>
      <h4>To select a property choose from the alternatives in the boxes below</h4>
      <BoxWrapper>
        <SelectWrapper>
          <Select onChange={handleSelectArea} options={areaTypeOptions} value={selectedArea} />
        </SelectWrapper>
        <SelectWrapper>
          <Select onChange={handleSelectPremisesType} options={premisesTypesOptions} value={selectedPremiseType} />
        </SelectWrapper>
        <SelectWrapper>
          <Select onChange={handleSelectProperties} options={avalPropertiesOptions} value={selectedProperty} />
        </SelectWrapper>
      </BoxWrapper>
      <SelectedPropertyData property={selectedProperty} />
    </BaseLayout>
  );
};
