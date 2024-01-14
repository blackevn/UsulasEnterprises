
--@BLOCK
CREATE TABLE Clients (
    ClientID INT PRIMARY KEY,
    ClientName VARCHAR(255) NOT NULL,
    ContactPerson VARCHAR(255),
    Email VARCHAR(255),
    Phone VARCHAR(15) CHECK (Phone IS NULL OR LENGTH(Phone) <= 15)
);

--@BLOCK
CREATE TABLE Projects (
    ProjectID INT PRIMARY KEY,
    ProjectName VARCHAR(255) NOT NULL,
    ClientID INT,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (ClientID) REFERENCES Clients(ClientID)
);

--@BLOCK
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Position VARCHAR(100),
    Email VARCHAR(255),
    Phone VARCHAR(15) CHECK (Phone IS NULL OR LENGTH(Phone) <= 15)
);

--@BLOCK
CREATE TABLE MarketingCampaigns (
    CampaignID INT PRIMARY KEY,
    CampaignName VARCHAR(255) NOT NULL,
    ProjectID INT,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);
--@BLOCK
CREATE TABLE Services (
    ServiceID INT PRIMARY KEY,
    ServiceName VARCHAR(255) NOT NULL,
    Description TEXT,
    Cost DECIMAL(10, 2) CHECK (Cost >= 0)
);
--@BLOCK
CREATE TABLE Advertisements (
    AdID INT PRIMARY KEY,
    AdName VARCHAR(255) NOT NULL,
    ServiceID INT,
    Platform VARCHAR(100),
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (ServiceID) REFERENCES Services(ServiceID)
);
--@BLOCK
CREATE TABLE Analytics (
    AnalyticsID INT PRIMARY KEY,
    CampaignID INT,
    Date DATE,
    Metrics TEXT,
    FOREIGN KEY (CampaignID) REFERENCES MarketingCampaigns(CampaignID)
);
--@BLOCK
CREATE TABLE SocialMediaPlatforms (
    PlatformID INT PRIMARY KEY,
    PlatformName VARCHAR(100) NOT NULL,
    URL VARCHAR(255)
);
--@BLOCK
CREATE TABLE WebsiteContent (
    ContentID INT PRIMARY KEY,
    ContentTitle VARCHAR(255) NOT NULL,
    URL VARCHAR(255),
    DatePublished DATE
);
--@BLOCK
CREATE TABLE Vendors (
    VendorID INT PRIMARY KEY,
    VendorName VARCHAR(255) NOT NULL,
    ContactPerson VARCHAR(255),
    Email VARCHAR(255),
    Phone VARCHAR(15) CHECK (Phone IS NULL OR LENGTH(Phone) <= 15)
);





--@BLOCK
SHOW TABLES;