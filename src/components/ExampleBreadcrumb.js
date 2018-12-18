import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ExampleBreadcrumb1 = (props) => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
        </div>       
    )
}

export const ExampleBreadcrumb2 = (props) => {
    return (
        <div>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};