CREATE TABLE `deals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`category` varchar(64) NOT NULL,
	`assetClass` enum('Private Equity','Venture','Real Estate','Consumer','Other') NOT NULL,
	`status` enum('active','deployed','passed','closed') NOT NULL DEFAULT 'active',
	`description` text,
	`minInvestment` varchar(64),
	`targetReturn` varchar(64),
	`featured` boolean NOT NULL DEFAULT false,
	`sortOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `deals_id` PRIMARY KEY(`id`)
);
