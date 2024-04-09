import { OrganizationList } from "@clerk/nextjs";
export default function CreateOrganizatinoPage(){
    return(
            <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
            />
    );
};