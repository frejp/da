import React from 'react';
import { TR, TD, PremisesWrapper, TH} from './styled';

const rentIncreaseArray = [1.05, 1.05, 1.03, 1.02, 1.02];

const PremiseTypes = ({ premisesTypes }: any) => {
  return premisesTypes.map((premise: any) => {
    return (
      <TR>
        <TD>{premise.type}</TD>
      </TR>
    );
  });
};

const YearlyRentPremise = ({ rentPremises }: any) => {
  return rentPremises.map((rentPremise: any) => {
    return (
      <TR>
        {rentIncreaseArray.map((increase) => {
          return <TD>{(rentPremise * increase).toLocaleString()}</TD>;
        })}
      </TR>
    );
  });
};

export const SelectedPropertyData = ({ property }: any) => {
  if (!property) {
    return <div>Please select property</div>;
  }

  const premisesTypes = property?.value?.premisesTypes;
  const propertyValue = property?.value?.value;

  const rentPremises = premisesTypes.map((premise: any) => {
    return (premise.rent * premise.area)
  })

  let totalRentAllPremises = 0;
  premisesTypes.forEach((premise: any) => {
    totalRentAllPremises += premise.rent * premise.area;
  });

  return (
    <>
      <h3>{`Data for following property ${property.value.name}`}</h3>
      <PremisesWrapper>
        <table>
          <TR>
            <TH>Rent Income</TH>
          </TR>
          <TR>
            <TD>Yield as (total rents/property value)</TD>
          </TR>
          <TR>
            <TD>Full property</TD>
          </TR>
          <PremiseTypes premisesTypes={premisesTypes} />
        </table>
        <table>
          <TR>
            <TH>Year1</TH>
            <TH>Year2</TH>
            <TH>Year3</TH>
            <TH>Year4</TH>
            <TH>Year5</TH>
          </TR>
          <TR>
            {rentIncreaseArray.map((increase) => {
              return <TD>{((totalRentAllPremises * increase) / propertyValue).toFixed(2)}</TD>;
            })}
          </TR>
          <TR>
            {rentIncreaseArray.map((increase) => {
              return <TD>{(totalRentAllPremises * increase).toLocaleString()}</TD>;
            })}
          </TR>
          <YearlyRentPremise rentPremises={rentPremises} />
        </table>
      </PremisesWrapper>
    </>
  );
};
