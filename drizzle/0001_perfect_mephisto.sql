CREATE TABLE `investor_deals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`dealName` varchar(255) NOT NULL,
	`dealCategory` varchar(64) NOT NULL,
	`dealStatus` enum('Active','Deployed','Exited','Passed') NOT NULL,
	`investmentAmount` varchar(64),
	`ownership` varchar(64),
	`investmentDate` varchar(32),
	`currentValue` varchar(64),
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `investor_deals_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `investor_profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`phone` varchar(32),
	`accreditedInvestor` boolean NOT NULL DEFAULT false,
	`investmentFocus` text,
	`bio` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `investor_profiles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `portal_documents` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`title` varchar(255) NOT NULL,
	`description` text,
	`category` enum('K1','Operating Agreement','Deal Memo','Update','Other') NOT NULL DEFAULT 'Other',
	`fileUrl` text,
	`dealName` varchar(255),
	`isPlaceholder` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `portal_documents_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD `approvalStatus` enum('pending','approved','rejected') DEFAULT 'pending' NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `adminNote` text;